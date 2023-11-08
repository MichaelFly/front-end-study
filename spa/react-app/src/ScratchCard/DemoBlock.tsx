import type { CSSProperties, FC, ReactNode } from 'react';

const DemoBlock: FC<{ children: ReactNode;}> = (props) => {
    return (
        <div style={{ marginTop: 20,width:'260px',height:'180px',position:'relative' }}>
            {props.children}
        </div>
    );
};

const ChildrenElement: FC<{ style?: CSSProperties }> = (props) => (
    <div
        style={{
            position:'absolute',
            left:0,
            top:0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...props.style,
        }}
    >
        <span>恭喜您，刮中了法拉利5元代金劵</span>
    </div>
);

export { ChildrenElement, DemoBlock };
