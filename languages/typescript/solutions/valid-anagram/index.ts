import { isAnagram, isAnagramOneLiner } from "./valid-anagram";

function main(){
    console.log("Valid Anagram Algorithm");
    const s = "anagram";
    const t = "nagaram";
    console.log(`Is "${s}" an anagram of "${t}"?`, isAnagram(s, t));
    const s2 = "rat";
    const t2 = "car";
    console.log(`Is "${s2}" an anagram of "${t2}"?`, isAnagram(s2, t2));
    const s3 = "listen";
    const t3 = "silent";
    console.log(`Is "${s3}" an anagram of "${t3}"?`, isAnagram(s3, t3));
    console.log("-----------------------------");
    console.log("One-liner Valid Anagram Algorithm");
    console.log(`Is "${s}" an anagram of "${t}"?`, isAnagramOneLiner(s, t));
    console.log(`Is "${s2}" an anagram of "${t2}"?`, isAnagramOneLiner(s2, t2));
    console.log(`Is "${s3}" an anagram of "${t3}"?`, isAnagramOneLiner(s3, t3));
    console.log("-----------------------------");
    console.log("End of Valid Anagram Algorithm");
}
main();