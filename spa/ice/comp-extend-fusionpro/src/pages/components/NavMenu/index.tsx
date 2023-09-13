import { Nav } from '@alifd/next';
import { Link } from 'ice';
import { menus } from '@/pages/components/NavMenu/data';

export default function () {
    return (
      <Nav style={{ width: '100%' }} type={'normal'} defaultOpenAll>
        {
              menus.map(menu => {
                  return (<Nav.Item>
                    <Link to={menu.path} title={menu.txt} >{menu.txt}</Link>
                  </Nav.Item>);
              })
          }

      </Nav>
    );
}
