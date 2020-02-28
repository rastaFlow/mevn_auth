if(process.env.NODE_ENV === "production"){
  module.exports ={
    mongoURI: "mongodb+srv://node_auth:nodeauth123456789@nodeauth-dtmv7.mongodb.net/test?retryWrites=true&w=majority",
    secret: "yoursecret"
  };
}else{
  module.exports ={
    mongoURI: "mongodb://localhost:27017/node_auth",
    secret: "yoursecret"
  };
}
