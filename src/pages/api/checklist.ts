import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    if (req.method == 'POST') {
      const data = req.body;
      const response = await fetch( "http://localhost:8000/api/checklist", {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), 
      });
      const checklistJson = await response.json();

      res.status(200).json({message: 'success', data: checklistJson, error: null});
        
    }
    if (req.method == 'GET') {
      const response = await fetch( "http://localhost:8000/api/checklist");
      const checklistJson = await response.json();
      res.status(200).json({message: 'success', data: checklistJson, error: null});
    }


    
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to load data' });
  }
}