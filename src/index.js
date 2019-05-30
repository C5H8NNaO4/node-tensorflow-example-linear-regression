import * as tf from "@tensorflow/tfjs-node";
import {data, labels} from './data';

export const EPOCHS=500;  // higher=better but slower

console.log (tf)
const train = async (data, labels) => {
  const model = tf.sequential();

  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
  
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  await model.fit(data,labels,{epochs: EPOCHS})
  return model;
}

const predict =  (model, n) => {
  const predicted =  model.predict(tf.tensor2d([n],[1,1])); 
  return predicted;
}


(async () => {
  let trained = await train (data,labels);
  for (let n of [4,6,12]) {
    let predicted = predict (trained, n).dataSync ();
    console.log (`Value: ${n} Predicted: ${predicted [0]}`)
  }
})()