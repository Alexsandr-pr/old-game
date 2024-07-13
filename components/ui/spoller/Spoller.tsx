"use client";
import { IconId } from "@/utils/iconSpriteId"
import Icon from "../Icon"
import "./spoller.scss";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useState } from "react"

const Spoller = ({
    children,
    title
}: Readonly<{
    title:string;
    children: React.ReactNode;
}>) => {
    const [show, setShow] = useState<boolean>(false);
    const [block] = useAutoAnimate();

    return (
        <div ref={block} className={`spoller ${show && "active"}`}>
            <div className="spoller__button">
                <h3 className="spoller__button-title">{title}</h3>
                <button onClick={() => setShow(prev => !prev)} className={`spoller__button-trigger`}>
                    <Icon color="" height={7} width={14} id={IconId.IconChevron}/>
                </button>
            </div>
            {
                show &&
                <div className="spoller__content">
                    {
                        children
                    }
                </div>
            }
            
        </div>
    )
}

export default Spoller