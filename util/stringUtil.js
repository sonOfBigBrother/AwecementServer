/**
 * Created by David Xie on 2017/5/13.
 */
export function removeEscape(s) {
  if (s){
    s = s.replace(/\r?\n|\r/g,"");
  }
  return s.trim();
}