import { useState } from 'react';
import apis from './api';

const App: React.FC = () => {
  const [admins, setAdmins] = useState<string[]>([]);
  const [account, setAccount] = useState<any>();

  const getAdmins = async () => {
    const { err, data } = await apis.get['/admins']();
    if (err) return;
    setAdmins(data!.admins);
  };

  const getAccount = async () => {
    const { err, data } = await apis.get['/account/{username}']({
      args: {
        username: '123',
      },
    });
    if (err) return;
    setAccount(data);
  };

  const updatePassword = async () => {
    await apis.put['/password']({
      data: {
        password: '123',
      },
      params: {
        username: '123',
      },
    });
  };

  const get500Error = async () => {
    const { err, data } = await apis.get['/500-error']();
    if (err) return;
    console.log(123);
  };

  return (
    <div>
      <fieldset>
        <legend>普通请求</legend>
        <button onClick={getAdmins}>获取</button>
        <br />
        {admins.toString()}
      </fieldset>

      <fieldset>
        <legend>含路径参数的普通请求</legend>
        <button onClick={getAccount}>获取</button>
        <br />
        {account && JSON.stringify(account)}
      </fieldset>

      <fieldset>
        <legend>报500的普通请求</legend>
        <button onClick={get500Error}>获取</button>
      </fieldset>
    </div>
  );
};

export default App;
