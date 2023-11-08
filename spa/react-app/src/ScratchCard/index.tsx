import { ScratchCard } from "scratch-card-react";
import {ChildrenElement, DemoBlock } from "./DemoBlock";
import './index.css'

export default function (){
    return (
        <DemoBlock>
            <ScratchCard
                classNames={{
                    root: 'customize-root',
                    mask: 'customize-mask',
                    body: 'customize-body',
                }}
                width={260}
                height={180}
                coverColor="yellow"
            />
            <ChildrenElement />
        </DemoBlock>
    )
}
