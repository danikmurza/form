export class CreatePostDto {
    readonly title: string;
    readonly content: string;
    readonly time: string
    readonly priority: string
    readonly done: boolean
    readonly userId: number
    readonly date: string
}


export class PostDto {
    readonly id: number
    readonly userId: number
}

export class UpdatePostDto {
    readonly id: number
    readonly title: string;
    readonly content: string;
    readonly time: string
    readonly priority: string
    readonly done: boolean
    readonly userId: number
    readonly date: string
}

