import { useSelectionBounds } from '@/hooks/use-selection-bounds';
import { LayerType, Side, XYWH } from '@/types/canvas';
import { useSelf, useStorage } from '@liveblocks/react/suspense';
import React, { memo } from 'react'

interface Props {
    onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(({
    onResizeHandlePointerDown
}: Props) => {
    const soleLayerId = useSelf((me) => me.presence.selection.length === 1 ? me.presence.selection[0] : null)

    const isShowingHandles = useStorage((root) => {
        return soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
    })

    const bounds = useSelectionBounds();

    if (!bounds) {
        return null;
    }

    const handlePositions = [
        {
            x: bounds.x,
            y: bounds.y,
            cursor: "nwse-resize",
            side: Side.Top + Side.Left
        }, // Top-left
        {
            x: bounds.x + bounds.width / 2,
            y: bounds.y,
            cursor: "ns-resize",
            side: Side.Top
        }, // Top-center
        {
            x: bounds.x + bounds.width,
            y: bounds.y,
            cursor: "nesw-resize",
            side: Side.Top + Side.Right
        }, // Top-right
        {
            x: bounds.x,
            y: bounds.y + bounds.height / 2,
            cursor: "ew-resize",
            side: Side.Left
        }, // Middle-left
        {
            x: bounds.x + bounds.width,
            y: bounds.y + bounds.height / 2,
            cursor: "ew-resize",
            side: Side.Right
        }, // Middle-right
        {
            x: bounds.x,
            y: bounds.y + bounds.height,
            cursor: "nesw-resize",
            side: Side.Bottom + Side.Left
        }, // Bottom-left
        {
            x: bounds.x + bounds.width / 2,
            y: bounds.y + bounds.height,
            cursor: "ns-resize",
            side: Side.Bottom
        }, // Bottom-center
        {
            x: bounds.x + bounds.width,
            y: bounds.y + bounds.height,
            cursor: "nwse-resize",
            side: Side.Bottom + Side.Right
        } // Bottom-right
    ];

    return (
        <>
            <rect
                className='fill-transparent stroke-blue-500 stroke-1 pointer-events-none'
                style={{
                    transform: `translate(${bounds.x}px,${bounds.y}px)`,
                }}
                x={0}
                y={0}
                width={bounds.width}
                height={bounds.height}
            />
            {
                isShowingHandles && handlePositions.map((pos, index) => (
                    <rect
                        key={index}
                        className='fill-white stroke-1 stroke-blue-500 hover:fill-blue-300'
                        x={0}
                        y={0}
                        style={{
                            cursor: pos.cursor,
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${pos.x - HANDLE_WIDTH / 2}px, ${pos.y - HANDLE_WIDTH / 2}px)`
                        }}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            onResizeHandlePointerDown(pos.side, bounds)
                        }}
                    />
                ))
            }
        </>
    )
});

SelectionBox.displayName = "SelectionBox";