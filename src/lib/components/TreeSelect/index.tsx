import { useEffect, useState } from 'react';
import Icon from '../Icon';
import { InputErrorMessage } from '../InputErrorMessage';
import { Label } from '../InputText/index.style';
import { ToolTipButton, ToolTipWrapper } from '../LabelTooltip';
import ToolTip from '../Tooltip';
import {
  ChildrensContainer,
  TreeSelectContainer,
  TreeSelectInput,
  TreeSelectInputContainer,
  TreeSelectInputValue,
  TreeSelectOption,
  TreeSelectOptionChevron,
  TreeSelectOptionsContainer,
  TreeSelectWrapper,
} from './index.style';
import useComponentVisible from '../../hooks/useComponentVisible';

type TreeKeys = {
  childrens: string;
  label: string;
  value: string;
  isDisabled: string;
  notSelectable: string;
};

export interface SelectProps {
  label?: { text: string; tooltip?: string };
  disabled?: boolean;
  readOnly?: boolean;
  options: { [x: string]: any }[];
  selectedValue?: any;
  error?: string;
  onChange: (v: any) => void;
  keys?: Partial<TreeKeys>;
  showFullLabel?: boolean;
  [x: string]: any;
}

type CurrentOptionType = { label: string; value: any };

function TreeOption({
  tree,
  keysToUse,
  onSelect,
  prevLabel,
  showFullLabel,
}: {
  tree: any;
  keysToUse: TreeKeys;
  onSelect: (label: string, value: any) => void;
  prevLabel?: string;
  showFullLabel?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const completeLabel = prevLabel
    ? `${prevLabel} / ${tree?.[keysToUse.label]}`
    : `${tree?.[keysToUse.label]}`;

  const labelToSelect = showFullLabel ? completeLabel : tree?.[keysToUse.label];

  const notSelectable = !!tree?.[keysToUse.notSelectable];
  const isDisabled = !!tree?.[keysToUse.isDisabled];

  if (isDisabled) return <></>;

  return (
    <>
      <TreeSelectOption
        notSelectable={notSelectable}
        onClick={
          !notSelectable ? () => onSelect(labelToSelect, tree?.[keysToUse.value]) : () => null
        }
      >
        {tree?.[keysToUse.childrens]?.length > 0 && (
          <TreeSelectOptionChevron
            open={open}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            <Icon icon='chevron_down' size={18} />
          </TreeSelectOptionChevron>
        )}

        {tree?.[keysToUse.label]}
      </TreeSelectOption>
      {open && (
        <ChildrensContainer>
          {tree?.[keysToUse.childrens]?.length > 0 &&
            tree?.[keysToUse.childrens].map((children: any, i: any) => (
              <TreeOption
                key={i}
                tree={children}
                keysToUse={keysToUse}
                onSelect={onSelect}
                prevLabel={completeLabel}
                showFullLabel={showFullLabel}
              />
            ))}
        </ChildrensContainer>
      )}
    </>
  );
}

const defaultKeys: TreeKeys = {
  childrens: 'childrens',
  label: 'label',
  value: 'value',
  isDisabled: 'isDisabled',
  notSelectable: 'notSelectable',
};

const TreeSelect = ({
  options,
  onChange,
  selectedValue = null,
  label,
  disabled = false,
  readOnly = false,
  error,
  keys,
  showFullLabel,
  ...rest
}: SelectProps) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [filter, setFilter] = useState('');
  const [currentOption, setCurrentOption] = useState<CurrentOptionType>({
    label: '',
    value: null,
  });
  const keysToUse = { ...defaultKeys, ...keys };

  useEffect(() => {
    onChange(currentOption.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOption]);

  useEffect(() => {
    function findOptionInTree(arr: any[], value: any, p: string) {
      let i, len;

      for (i = 0, len = arr.length; i < len; i++) {
        if (arr[i][keysToUse.value] === value)
          return {
            label: showFullLabel ? p + ' / ' + arr[i][keysToUse.label] : arr[i][keysToUse.label],
            value: arr[i][keysToUse.value],
          };
        if (arr[i][keysToUse.childrens] && arr[i][keysToUse.childrens].length > 0) {
          const f: any = findOptionInTree(
            arr[i][keysToUse.childrens],
            value,
            p ? p + ' / ' + arr[i][keysToUse.label] : arr[i][keysToUse.label],
          );
          if (f) return f;
        }
      }
    }

    const optionToSelect = findOptionInTree(options, selectedValue, '');

    if (optionToSelect) setCurrentOption(optionToSelect);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const onSelect = (label: string, value: any) => {
    setCurrentOption({
      label: label,
      value: value,
    });
    setIsComponentVisible(false);
  };

  return (
    <TreeSelectWrapper>
      {label?.text && (
        <Label>
          {label?.text}
          {label?.tooltip && (
            <ToolTipWrapper>
              <ToolTip text={label.tooltip}>
                <ToolTipButton>?</ToolTipButton>
              </ToolTip>
            </ToolTipWrapper>
          )}
        </Label>
      )}

      <TreeSelectContainer ref={ref}>
        <TreeSelectInputContainer
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          disabled={disabled}
          readOnly={readOnly}
        >
          <TreeSelectInput
            onChange={(e) => {
              setFilter(e.target.value);
              setIsComponentVisible(true);
            }}
            placeholder='Selecione'
            disabled={disabled}
            readOnly={readOnly}
            value={isComponentVisible ? filter : currentOption.label}
          />
          <TreeSelectInputValue
            onChange={() => null}
            disabled={disabled}
            readOnly={readOnly}
            {...rest}
          />
          <Icon icon='chevron_down' size={22} />
        </TreeSelectInputContainer>
        <TreeSelectOptionsContainer open={isComponentVisible}>
          <TreeSelectOption
            onClick={() => {
              onSelect('', null);
            }}
          >
            Selecione
          </TreeSelectOption>
          {options.map((tree, i) => {
            return (
              <TreeOption
                key={i}
                tree={tree}
                keysToUse={keysToUse}
                onSelect={onSelect}
                showFullLabel={showFullLabel}
              />
            );
          })}
        </TreeSelectOptionsContainer>
      </TreeSelectContainer>
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </TreeSelectWrapper>
  );
};

export default TreeSelect;
