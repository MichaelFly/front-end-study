import BooleanSelect from '@/pages/components/BooleanSelect';
import { useState } from 'react';

export default function () {
    const [bool, setBool] = useState(false);
    return (<BooleanSelect
      value={bool}
      onChange={val => setBool(val)}
    />);
}

