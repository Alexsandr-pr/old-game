

const Icon = ({
    id,
    size,
    color
}: {
    id: string,
    size: number,
    color: string
}) => {
   
    return (
        <svg color={`var(${color})`} width={size} height={size}>
            <use xlinkHref={`/images/sprite.svg${id}`} />
        </svg>
    )
}

export default Icon