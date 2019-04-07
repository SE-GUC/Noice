const funcs = require('./vacancyFn');


test('View Vacancy', async () => {
  const response =  await funcs.viewVacancy()
  expect(response.data.data).not.toEqual(null)
})




