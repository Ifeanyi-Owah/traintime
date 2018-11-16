
var config = {
    apiKey: "AIzaSyDxupTeLQmQBvmINqBnxTemaqGY6O66fzg",
    authDomain: "traintime-ff8e3.firebaseapp.com",
    databaseURL: "https://traintime-ff8e3.firebaseio.com",
    projectId: "traintime-ff8e3",
    storageBucket: "traintime-ff8e3.appspot.com",
    messagingSenderId: "668383650943"
  };

firebase.initializeApp(config);
var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrainTime = $("#start-time-input").val().trim();
    var frequency = $("#frequency-input").val().trim();

    var newTrain = {
        name: trainName,
        dest: destination,
        first: firstTrainTime,
        freq: frequency
      };

      database.ref().push(newTrain);

      console.log(newTrain.name);
      console.log(newTrain.dest);
      console.log(newTrain.first);
      console.log(newTrain.freq);

      alert("Train successfully added");

      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#start-time-input").val("");
      $("#frequency-input").val("");
      $("#frequency-input").val("");


});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val()); 

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var firstTrainTime = childSnapshot.val().first;
    var frequency = childSnapshot.val().freq;

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

    // var trainStartPretty = moment.unix(firstTrainTime).format("HH:mm");

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(firstTrainTime),
        $("<td>").text(frequency),
        $("<td>").text(frequency),
      );

      $("#train-table > tbody").append(newRow);


});


