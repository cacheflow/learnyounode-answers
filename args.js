for (var sum=0, i=2; i<process.argv.length; i++) {

  sum += +process.argv[i]
}

console.log(sum)
