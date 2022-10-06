"use strict";

module.exports.hello = async (event) => {
  const {input1,input2}=event.params;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Adding of Two number",
        Sum: input1+input2,
      }
    ),
  };
};
