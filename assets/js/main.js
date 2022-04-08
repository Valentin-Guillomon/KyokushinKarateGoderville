//  Exercice 9

let ratio = .1
let options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio,
}

let handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}



  let observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) {
observer.observe(r)    
})

