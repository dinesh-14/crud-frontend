export const USER_COLS = [
    { key: 'name', label: 'Name', isEdit: true, isSort: true },
    { key: 'email', label: 'Email', isEdit: true, isSort: false },
    { key: 'roleType', label: 'Role Type', isEdit: true, isSort: false },
    { key: 'status', label: 'Status', isEdit: true, isSort: false },
    { key: 'mobile', label: 'Mobile', isEdit: true, isSort: false },
    { isEdit: true, key: 'actions', label: '' }
];


export const VALIDATORS = {
    NUMBER: '^[0-9]*$',
};

export const VALIDATION_MESSAGES = {
    EMPTY_FIELD_MSG: 'Invalid entry'
};


export const ROLE_TYPE_LIST = [
    { value: 'Admin', label: 'Admin', checked: false, isActive: true },
    { value: 'Customer Executive', label: 'Customer Executive', checked: false, isActive: true },
];