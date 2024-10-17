
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useDispatch } from "react-redux"
import { productCondition } from "@/data/redux/sellerAuthSlice"

const ConditionProd = ({ value, setFieldValue, Conditions, fieldName }) => {
    const [open, setOpen] = React.useState(false)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(productCondition(value))
    // }, [value])



    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[100%] justify-between h-[3.4rem] shdaow-lg"
                    >
                        {console.log("valueee", value)}
                        {value

                            ? Conditions.find((condition) => condition.category === value)?.category
                            : `Select ${fieldName}`}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search Condition..." />
                        <CommandList>
                            <CommandEmpty>No Condition found.</CommandEmpty>
                            <CommandGroup>
                                {Conditions.map((condition) => (
                                    <CommandItem
                                        key={condition.category}
                                        value={condition.category}
                                        onSelect={(currentValue) => {
                                            console.log(`Selected: ${currentValue}, Previous Value: ${fieldName}`);
                                            setFieldValue(fieldName, currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === condition.category ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {condition.category}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
export default ConditionProd


