--!optimize 2
--!strict

export type Symbol = typeof(newproxy(true)) & {[string]: any}

local function Symbol(name: string?): Symbol
	local self = newproxy(true) :: any
	local wrappedName = if name then `Symbol({name})` else "Symbol()"

	getmetatable(self).__tostring = function()
		return wrappedName
	end

	return (self :: any) :: Symbol
end

return Symbol
