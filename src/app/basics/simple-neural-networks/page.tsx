import Code from '@/components/code';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, dracula, duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Zero() {
    return (
        <div>
            <h1>
                In Practice
            </h1>
            <h2>
                Simple multiple input/output neural network
            </h2>
            <br />
            <Code>
                {`import numpy as np

matrix = np.array([[0.1, 0.1, -0.3], [0.1, 0.2, 0.0], [0.0, 1.3, 0.1]])
vector = np.array([8.5, 0.65, 1.2])

result = matrix @ vector

print(result)`}
            </Code>
            <h2>
                First hidden layer neural network
            </h2>
            <Code>
                {`import numpy as np

ih_wgt = np.array([[0.1, 0.2, -0.1], [-0.1, 0.1, 0.9], [0.1, 0.4, 0.1]])

ho_wgt = np.array([[0.3, 1.1, -0.3], [0.1, 0.2, 0.0], [0.0, 1.3, 0.1]])

weights = [ih_wgt, ho_wgt]
input = np.array([8.5, 0.65, 1.2])


current_layer = input
for weight in weights:
next_layer = weight @ current_layer
current_layer = next_layer 

print(current_layer)`}
            </Code>
            <h2>
                Multiple inputs, one output, one hidden layer with multiple neurons
            </h2>
            <Code>
                {`import numpy as np

def multi_dim():
    input = np.array([8.5, 0.65, 1.2])

    ih_wgt = np.array([[0.1, 0.2, -0.1], [-0.1, 0.1, 0.9], [0.1, 0.4, 0.1]])

    ho_wgt = np.array([[0.3], [0.1], [0.0]])
    
    hidden = ih_wgt @ input
    output = np.dot(hidden, ho_wgt)

    print(output)`}
            </Code>
        </div>
    )
}
