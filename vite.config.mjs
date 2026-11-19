import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({base:'./',plugins:[react(),{
 name:'static-monuments-page',
 generateBundle(_,bundle) {
  const home=bundle['index.html'];
  if(home?.type==='asset') this.emitFile({type:'asset',fileName:'monuments.html',source:String(home.source).replace('<title>Белореченская 10 в Екатеринбурге</title>','<title>Памятники в Екатеринбурге — Белореченская 10</title>')});
  this.emitFile({type:'asset',fileName:'.nojekyll',source:''});
 }
}],build:{outDir:'docs'}});
