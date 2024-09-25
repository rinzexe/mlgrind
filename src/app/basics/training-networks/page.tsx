import Code from "@/components/code";

export default function TrainingNetworks() {
    return (
        <div>
            <h2>
                Training a network with multiple inputs and multiple outputs with gradient descent
            </h2>
            <Code>
                {`import numpy as np

goal_pred = [0.6, 0.3, 0.9]


def multi_dim():
    weights = np.array([[0.3, 0.1, 0.0], [0.1, 0.2, 0.0], [0.0, 1.3, 0.1]])
    input = np.array([0.5, 0.65, 0.6])

    for iter in range(20):
        output = input @ weights

        error = [0, 0, 0]
        delta = [0, 0, 0]

        for i in range(len(goal_pred)):
            error[i] = (output[i] - goal_pred[i]) ** 2

        delta = output - goal_pred

        weight_deltas = np.outer(input, delta)


        for i in range(len(weights)):
            for j in range(len(weights[0])):
                weights[i][j] = weights[i][j] - weight_deltas[i][j]

        print("Output:" + str(output))
        print("Error:" + str(error))
        print(" ")


multi_dim()
    print(output)`}
            </Code>
            <h2>
                Training a network with a hidden layer
            </h2>
            <Code>
                {`import numpy as np

np.random.seed(1)

def relu(x):
    return (x > 0) * x
def relu2deriv(output):
    return output>0

streetlights = np.array( [[ 1, 0, 1 ],
[ 0, 1, 1 ],
[ 0, 0, 1 ],
[ 1, 1, 1 ] ] )

walk_vs_stop = np.array([[ 1, 1, 0, 0]]).T

alpha = 0.2
hidden_size = 4

weights_0_1 = 2*np.random.random((3,hidden_size)) - 1
weights_1_2 = 2*np.random.random((hidden_size,1)) - 1

for iteration in range(60):
    layer_2_error = 0
    for i in range(len(streetlights)):

        layer_0 = streetlights[i:i+1]
        layer_1 = relu(np.dot(layer_0,weights_0_1))
        layer_2 = np.dot(layer_1,weights_1_2)

        layer_2_error += np.sum((layer_2 - walk_vs_stop[i:i+1]) ** 2)

        layer_2_delta = (layer_2 - walk_vs_stop[i:i+1])
        layer_1_delta=layer_2_delta.dot(weights_1_2.T)*relu2deriv(layer_1)

        weights_1_2 -= alpha * layer_1.T.dot(layer_2_delta)
        weights_0_1 -= alpha * layer_0.T.dot(layer_1_delta)
        
        if(iteration % 10 == 9):
            print("Error:" + str(layer_2_error))`}
            </Code>
        </div>
    )
}