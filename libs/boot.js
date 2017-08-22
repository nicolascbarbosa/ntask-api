module.exports = app => {
  app.db.sync().done(() => {
    app.listen(app.get('port'), () => console.log(`Express server listening on port ${app.get('port')}`));  
  })  
}