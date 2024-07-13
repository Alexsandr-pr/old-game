


const Icon = ({
    id,
    size,
    width,
    height,
    color
}: {

    id: string,
    size?: number,
    width?: number,
    height?: number,
    color: string
}) => {

    return (
        <svg color={`var(${color})`} width={width ?? size} height={height ?? size}>
            <use xlinkHref={`/images/sprite.svg${id}`} />
        </svg>
    )
}

export default Icon