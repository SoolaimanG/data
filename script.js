const number = document.querySelector("input");
const button = document.querySelector("button");
const text = document.querySelector("h5");

button.addEventListener("click", function () {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2628430868msha458838465f332fp14cf7djsn7696ae8601c9",
      "X-RapidAPI-Host": "phonenumbervalidatefree.p.rapidapi.com",
    },
  };

  fetch(
    `https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp?number=%2B+234${number.value}&country=UY`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return (text.innerText = `${response.nationalFormat} has successfully subscribed to ${response.carrier} One month unlimited data (You Will Recieve a notification on your number shortly)`);
    })
    .catch((err) => console.error(err));
});
