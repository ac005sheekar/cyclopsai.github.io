

async function run() {
    // [START load_and_run_model]
    const model = await tf.automl.loadImageClassification('model.json');
    const image = document.getElementById('piya');
    const predictions = await model.classify(image);
    // [END load_and_run_model]
    console.log(predictions);
    // Show the resulting object on the page.
    const pre = document.getElementById('pre');
    pre.textContent = JSON.stringify(predictions, null, 2);  
    document.body.append(pre);
}


const image = document.getElementById('myFile');

/*
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#piya')
        .attr('src', e.target.result)
        .width(150)
        .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
*/

var loadFile = function(event) {
	var image = document.getElementById('piya');
	image.src = URL.createObjectURL(event.target.files[0]);
};

