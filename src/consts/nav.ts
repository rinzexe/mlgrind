export interface Link {
    label: string
    href?: string
    active?: boolean
    sublinks?: Link[]
}

export const menu: Link[] = [
    {
        label: "Home",
        href: "/"
    }
]

export const roadmap: Link[] = [
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
