# DIRIWARI Portfolio (Modular)
Structure:
```
diriwari-portfolio/
  index.html
  assets/
    css/styles.css
    js/
      main.js
      utils.js
      nav.js
      owner.js
      publications.js
      gallery.js
      contact.js
      three-stub.js
      backtotop.js
  cv.pdf (optional; place your CV here)
```
Owner passphrase hash (SHA-256 of your secret):
```
68dda963148c57b86f5ae7cf568be3465a45f208d9fb4b14ccf006b44bd73fc0
```
Dev server (pick one):
- Python: `python -m http.server 8080`
- Node: `npx http-server -p 8080`
Then open http://localhost:8080

Backend sketch (Node/Express):
```js
import express from 'express';
import multer from 'multer';
const app = express();
app.use(express.json());

app.post('/api/contact', (req,res)=>{ res.json({ ok:true }); });

const upload = multer({ dest: 'uploads/' });
app.post('/api/upload', upload.array('photos', 10), (req,res)=>{ res.json({ files: req.files }); });

app.post('/api/publications', (req,res)=>{ res.status(201).json(req.body); });

app.listen(8080, ()=> console.log('API on http://localhost:8080'));
```
Hosting:
- Static: GitHub Pages, Netlify, Vercel
- Full‑stack: Render, Fly.io, Railway, VPS
