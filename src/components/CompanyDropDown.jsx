import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdCall, MdMoreVert, MdAttachFile, MdSend } from 'react-icons/md';

const CompanyDropDown = ({ menuLabel, options, handleClick }) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <span className="focus:outline-none focus:ring-0 focus:border-none focus:shadow-none cursor-pointer">
                        {
                            !menuLabel ? (
                                <MdMoreVert className="text-gray-600" size={20} />
                            ) : (
                                menuLabel
                            )
                        }
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2">
                    <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {options?.map((option) => (
                        <DropdownMenuItem
                            key={option.id}
                            className="focus:outline-none focus:ring-0 focus:border-none focus:shadow-none hover:bg-gray-200"
                        >
                            <span onClick={() => handleClick(option.value)}>{option.value}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default CompanyDropDown;
