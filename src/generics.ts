const getFirstElement = <ElementType>(array: ElementType[]) => {
    return array[0];
}

const firstIndexNumber = getFirstElement([1, 2, 3, 4]);
const firstIndexCharater = getFirstElement(["one", "two", "three"]);
const firstIndexObject = getFirstElement([{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3 }]);

const querySelector = document.querySelector<HTMLInputElement>(".input"); // explicitly defined generic type
querySelector?.value;

const querySelectorInput = document.querySelector("input"); // implicitly typescript know input is ElementType
querySelector?.value;

const values = [1, 2, 3, 4, 5, 6, 7];
values.map(data => data);

const map = new Map<number, string>([[1, 'one'], [1, 'two']]);
map.set(3, "three")

// type ApiResponse<Data> = {
//     data: Data;
//     isError: boolean;
// }

// type ApiResponse<Data = { status: boolean }> = { // default type
//     data: Data;
//     isError: boolean;
// }

type ApiResponse<Data extends object = { status: boolean }> = { // type have to be object, then boolean
    data: Data;
    isError: boolean;
}

const myProfile: ApiResponse<{ id: number, userCode: string }> = {
    data: {
        id: 1,
        userCode: "UserData"
    },
    isError: false
}

const blogDetail: ApiResponse<{ id: number, title: string, description: string }> = {
    data: {
        id: 1,
        title: "First Blog",
        description: "Hello World"
    },
    isError: false
}

// blog detail
blogDetail.data.id;
blogDetail.data.title;
blogDetail.data.description;

// profile
myProfile.data.id;
myProfile.data.userCode;