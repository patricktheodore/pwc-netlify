const handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body);

  await fetch(`${process.env.URL}/.netlify/functions/emails/enquiry`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
    },
    method: "POST",
    body: JSON.stringify({
      from: "info@purifiedwindowcleaning.com.au",
      to: requestBody.email,
      cc: "info@purifiedwindowcleaning.com.au",
      subject: requestBody.subject,
      parameters: { 
        firstName: requestBody.firstName, 
        lastName: requestBody.lastName, 
        email: requestBody.email, 
        phone: requestBody.phone, 
        subject: requestBody.subject, 
        message: requestBody.message,
        address: requestBody.address,
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Enquriy sent"),
  };
};

export { handler };

