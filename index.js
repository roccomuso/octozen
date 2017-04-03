var zen = require('./zen')

module.exports = function(){
  var mex = zen[Math.floor(Math.random()*zen.length)]
  var top = Array(mex.length).join('_')
  var blank = Array(mex.length+1).join(' ')
  var bottom = Array(mex.length-2).join('_')

  var octozen = `

               MMM.           .MMM
               MMMMMMMMMMMMMMMMMMM
               MMMMMMMMMMMMMMMMMMM      _${top}__
              MMMMMMMMMMMMMMMMMMMMM    | ${blank} |
             MMMMMMMMMMMMMMMMMMMMMMM   | ${mex} |
            MMMMMMMMMMMMMMMMMMMMMMMM   |_   ${bottom}_|
            MMMM::- -:::::::- -::MMMM    |/
             MM~:~ 00~:::::~ 00~:~MM
        .. MMMMM::.00:::+:::.00::MMMMM ..
              .MM::::: ._. :::::MM.
                 MMMM;:::::;MMMM
          -MM        MMMMMMM
          ^  M+     MMMMMMMMM
              MMMMMMM MM MM MM
                   MM MM MM MM
                   MM MM MM MM
                .~~MM~MM~MM~MM~~.
             ~~~~MM:~MM~~~MM~:MM~~~~
            ~~~~~~==~==~~~==~==~~~~~~
             ~~~~~~==~==~==~==~~~~~~
                 :~==~==~==~==~~
`
  return octozen

}
