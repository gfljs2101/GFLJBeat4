let r,t,e,h,i,s,n,l=(r,t)=>r%t>=0?r%t:r%t+t,a=r=>sin(r*PI/128),o=(r,t)=>r*t%256/128-1+(r*t%256>192)-(r*t%256<64);class d{constructor(r){this.f=r,this.b=8}tick(r){return floor(this.f*r)!=floor(this.f*this.t??-1)?(this.t=r,this.b++):(this.t=r,!1)}}class c{constructor(r,t,e=0,h=0){this.arr=Array.from({length:round(47960/r)},random),this.w=t,this.d=h,this.t=0;for(let r=0;r<e;++r)for(let r=0;r<this.arr.length;++r)this.arr[r]=.2*this.arr[r]+.8*this.arr[l(r-1,this.arr.length)]}render(r=0){if(this.t<5e3*this.w-3500)return++this.t,0;this.arr[this.t%this.arr.length]=(this.arr[this.t%this.arr.length]*this.w+this.arr[((this.t||1)-1)%this.arr.length]*(1-this.w))*(1-this.d)+this.d/2;let t=r-floor(r);return(2*this.arr[l(this.t+++floor(r),this.arr.length)]-1)*(1-t)+(2*this.arr[l(this.t+floor(r),this.arr.length)]-1)*t}}class u{constructor(){this.n=0,this.env=1}render(){let r=this.n++;return this.env=.9994**r,tanh(a(4e4/sqrt(r))*this.env/2+tanh(a(14e3*.99997**r)*.9995**r*5))}}class w{constructor(){this.n=0}render(){let r=this.n++;return a(.8*r)*a(1.9*r)*.9988**r+(random()-.5)/2*.9997**r}}class g{constructor(r,t=r/5){this.arr=Array(r).fill(0),this.kern=Array(r).fill(0).map(((e,h)=>{let i=h/(r-1)*2-1;return(i?sin(PI*t*i)/(PI*t*i):1)*(1+cos(PI*i))/2})),this.i=0}render(r){return this.arr[this.i++%this.arr.length]=r,10*this.arr.reduce(((r,t,e)=>r+t*this.kern[l(e-this.i,this.kern.length)]/this.arr.length),0)}}class f{constructor(r){this.arr=Array(r).fill(0),this.i=0}render(r){return this.arr[this.i++%this.arr.length]=r,this.arr[this.i%this.arr.length]}}class m{constructor(r,t){this.arr=Array(r).fill(0),this.i=0,this.fb=t}render(r){return this.arr[this.i%this.arr.length]=r+this.fb*this.arr[(this.i+1)%this.arr.length],this.arr[this.i++%this.arr.length]}}class y{constructor(r,t){this.echoL=new m(r,t),this.echoR=new m(r,t),this.preDly=new f(r>>1),this.fb=t}render(r){return[this.echoL.render(r),r+this.echoR.render(this.preDly.render(r))*this.fb]}}let k=[[49,56,60,65,68],[49,56,60,63,68],[49,58,61,66,68],[49,56,60,63,68]],N=0,A=0,I=new d(8.4),P=new g(40,1),b=new g(40,3),p=new g(32,1),v=new class{constructor(r,t=r/2){this.arr=Array(r).fill(0),this.kern=Array(r).fill(0).map(((e,h)=>{let i=h/(r-1)*2-1;return(i?sin(PI*t*i)/(PI*t*i):1)*(1+cos(PI*i))/2*(-1)**h})),this.i=0}render(r){return this.arr[this.i++%this.arr.length]=r,10*this.arr.reduce(((r,t,e)=>r+t*this.kern[l(e-this.i,this.kern.length)]/this.arr.length),0)}}(26,11),x=r=>{return tanh(2**((t=-2,e=2,r=>max(min(r,e),t))(r)+.8)-1.8)-.05;var t,e},D=new y(21818,.5),L=new y(21818,.2),R=new f(480),q=0,j=0,z=1,B=!1;return (l,a)=>{l||(N=0,I=new d(8.8),r=t=e=h=i=s=n=void 0,A=0,D=new y(21818,.5),k=[[49,56,60,65,68],[49,56,60,63,68],[49,58,61,66,68],[49,56,60,63,68]],z=1,B=!1);let g=I.tick(l),f=k[max(g,A)-8>>4&3],m=[f,,,f,[0,0,0,0,0],,f,,f,,,f,[0,0,0,0,0],,f,,],C=[2,1,1,1,4,,2,q<9300?4:NaN,q<15e3?4:NaN,4,,4,2,,4,q<9300?2:NaN],E=(o(l*a*z,2**(-5/12)*1.002*C[N]/4)+o(l*a*z,2**(-5/12)*.998*C[N]/4))/4;g&&(262==g?(k=[[49,54,61,65,70],[49,54,61,65,70],[49,56,60,65,68],[49,56,60,65,68]],B=!0):326==g?k=[[49,54,61,65,70],[49,54,61,65,70],[49,56,60,65,68],[49,56,59,65,68]]:390==g?k=[[49,54,61,65,70],[51,54,60,63,68],[49,56,60,65,68],[53,56,61,65,70]]:454==g?k=[[49,54,61,65,70],[51,54,60,63,68],[49,56,60,65,68],[49,56,60,65,68]]:518==g?k=[[49,54,61,65,70],[51,54,60,63,68],[49,56,60,65,68],[53,56,61,65,70]]:582==g?k=[[49,54,61,65,70],[51,54,60,63,68],[49,56,60,65,68],[49,56,60,65,68]]:646==g&&(k=[[49,56,60,65,68],[49,56,60,63,68],[49,58,61,66,68],[49,56,60,63,68]],B=!1),m[N]&&(null!=m[N][0]&&(m[N][0]?r=new c(263*2**((m[N][0]-60)/12),.7,2,.002):(r.d=.04,r.weight=.2)),null!=m[N][1]&&(m[N][1]?t=new c(263*2**((m[N][1]-60)/12),.75,2,.003):(t.d=.04,t.weight=.2)),null!=m[N][2]&&(m[N][2]?e=new c(263*2**((m[N][2]-60)/12),.8,1,.003):(e.d=.04,e.weight=.2)),null!=m[N][3]&&(m[N][3]?h=new c(263*2**((m[N][3]-60)/12),.85,1,.003):(h.d=.04,h.weight=.2)),null!=m[N][4]&&(m[N][4]?i=new c(263*2**((m[N][4]-60)/12),.9,1,.003):(i.d=.04,i.weight=.2))),g%4==0&&(j=0,g>8*m.length&&(s=new u,g%16==4&&(n=new w)),B&&g%16==8?z=g<390?g-8&32?1:2**(5/12):2**([5,-5,0,-3,5,-5,0,0][g-8>>4&7]/12):B||(z=1)),++N,N%=m.length,A=g),N%4==1&&(q*=.997);let F=(r?r.render():0)+(t?t.render():0)+(e?e.render():0)+(h?h.render():0)+(i?i.render():0),G=P.render(F)/2+20*v.render(b.render(F)),H=(s?1-s.env:1)**3,J=A>8*m.length+7?D.render(x(G/3+F/2)):L.render(x(G/3+F/2)),K=p.render(f.reduce(((r,t)=>r+((r,t)=>(r*(t=2**(t/12))%254.4+(r+128)*t%255.6+r*t%257+r*t%256.3)/512-1)(l*a,t-54)),0)/16)*(1-.9994**q++)**3,M=A>8*m.length+7?(l*a*z*3/4&.77*j++>>6&l*a*z*9/8)%256/128-.2:0;E=isNaN(E)||A<8*m.length+8?0:E*H;let O=tanh(.8*((s?s.render():0)+(n?n.render():0)+1.3*K+M-E)),Q=.99999**max(0,l*a-42e5);return[.8*(O+J[0]*H)*Q,.8*(R.render(O)+J[1]*H)*Q]};