import Link from "next/link";

interface DesktopItemProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    href,
    icon: Icon,
    active,
    onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <li onClick={handleClick} key={label}>
            <Link
                href={href}
                className={`
                    group 
                    flex 
                    gap-x-3 
                    rounded-md 
                    p-3 
                    text-sm 
                    leading-6 
                    font-semibold 
                    text-gray-500 
                    ${!active && 'hover:text-amber-500'}
                    ${active && 'text-orange-600'}
                `}

            >
                <Icon className="h-6 w-6 shrink-0"></Icon>
                {/* <span>{label}</span> */}
            </Link>
        </li>
    )
}

export default DesktopItem