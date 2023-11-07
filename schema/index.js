const daily_data = import('./daily_checklist.json').then((data)=> {
    console.log(data);
    return data?.fields;
});

const schema = { 
    'daily': daily_data,
    'weekly': import('./weekly_checklist.json').then((data)=>  {return data.fields}),
    'monthly': import('./monthly_checklist.json').then((data)=>  {return data}),
}

export default schema;