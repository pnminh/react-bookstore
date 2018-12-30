// export a function that initializes all our routes.

module.exports = {
    init(app){
      const bookRoutes = require("../routes/books");
      app.use(bookRoutes);   
    }

    
  }

