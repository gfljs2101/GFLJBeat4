r=t*.95,
p=t*2*PI*78/44100,pr=78/44100*256,
c=int(2**([,7,5,,,6,,4,2,6,4,,,2,6,7][r>>12&15]??3)),
s=(n,i=c)=>i?sin(n*i)/i+s(n,i-1):0,
v=((r&16383)<4096?.1**(2500/(r&16383)):.02+.98*.9991**(r&4095)*.1**(3/(r&4095))),
k=atan(sin(t/r*500/cbrt(r&16383)-.01*t))*.9996**(r&16383)*.1**(10/(r&16383)),
b=(s(p)+s(p/2))*v*.7,
M=t=>(t*pr*6*2**([8,0,-7,5,0,-7,8,0,-7,5,0,-7,8,0,5,-7,10,0,-7,5,0,-11,10,1,-7,7,3,-2,10,3,-2,7,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,8,-4,-11,5,-4,-11,8,-4,-7,5,-4,-11,10,-4,5,-7,7,-2,-9,3,-2,-9,7,-2,-9,3,-9,-2,8,7,5,10,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,][r>>12&127]/12)&~r>>4|max(0,min(63,100-t/2E4)))%256/128-1,
m=(M(t)+M(t+10*cos(t*.001))+M(t+30*sin(t*.001)))/2*min(1,t/1E6),
[k-b*.8+m/8,k+b*.8+m/8]