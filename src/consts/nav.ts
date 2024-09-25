export interface ILink {
    label: string
    href?: string
    active?: boolean
    sublinks?: ILink[]
}

export const menu: ILink[] = [
    {
        label: "Home",
        href: "/"
    }
]

export const roadmap: ILink[] = [
    {
        label: "home",
        href: "/"
    },
    {
        label: "basics",
        sublinks: [
            {
                label: "training_types",
                href: "/basics/training-types",
            },
            {
                label: "simple_neural_networks",
                href: "/basics/simple-neural-networks"
            },
            {
                label: "gradient_descent",
                href: "/basics/gradient-descent"
            },
            {
                label: "linearity",
                href: "/basics/linearity"
            },
            {
                label: "backpropagation",
                href: "/basics/backpropagation"
            },
            {
                label: "memorization_generalization",
                href: "/basics/memorization-generalization"
            },
            {
                label: "training_networks",
                href: "/basics/training-networks"
            },
            {
                label: "activation_functions",
                href: "/basics/activation-functions"
            },
        ]
    },
]
