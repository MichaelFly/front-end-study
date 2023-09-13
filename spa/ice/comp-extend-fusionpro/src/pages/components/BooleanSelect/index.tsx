import { Select } from '@alifd/next';
import { SelectProps } from '@alifd/next/types/select';
import React from 'react';

interface TypeOfProps extends SelectProps {
    value?: boolean;
    txtConfig?: string[];
    onChange: (v: boolean) => void;
}

const defaultTxt = ['是', '否'];
function BooleanSelect(props: TypeOfProps) {
    const { value = false, onChange, txtConfig, ...rest } = props;
    const datasource = (txtConfig || defaultTxt)
        .map((txt, idx) => ({ label: txt, value: idx === 0 }));

    return (
      <Select
        dataSource={datasource}
        value={String(value)}
        onChange={(v: boolean) => {
                onChange(v);
            }}
        {...rest}
      />
    );
}

export default BooleanSelect;
