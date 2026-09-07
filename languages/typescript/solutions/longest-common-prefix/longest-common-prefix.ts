export function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 0) {
        return "";
    }
    let prefix = strs[0];
    for(const str of strs) {
        let i = 0;
        while(i < prefix.length && i < str.length && prefix[i] === str[i]) {
            i++;
        }
        if(i === 0) {
            return "";
        }
        prefix = prefix.substring(0, i);
    }
    return prefix;
}