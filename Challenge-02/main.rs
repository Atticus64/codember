extern crate minreq;
const ASCII_Z: u8 = 122;
const ASCII_A: u8 = 97;

fn main() {
    let url = "https://codember.dev/encrypted.txt";
    let res = match minreq::get(url).send() {
        Ok(res) => res,
        Err(e) => {println!("Something bad happens: {e}"); return; }
    };

    // let arr_codes = res.as_bytes().to_vec();
    let code =  res.as_str().expect("Something failed");
    let coded_msg = String::from(code);

    let result: Vec<String> = coded_msg.split(' ').map(|word| decrypt_word(word) ).collect();
    
    println!("{:?}", result.join(" "));

    
}


/// This function will return a decoded msg
/// receive a str of numbers -> "11688123"
fn decrypt_word(word: &str) -> String {
    let arr: Vec<u8> = word.as_bytes().to_vec();
    let mut new_word =  String::from("");
    let mut decoded_word: String = String::from("");
    for c in arr {
        new_word.push(c as char);
        let ascii_value: u8 = new_word.parse().expect("failed to convert String to u8");
        if ascii_value <= ASCII_Z && ascii_value >= ASCII_A  {
            decoded_word.push(ascii_value as char);
            new_word = String::from("");
        }
    }
    return decoded_word;
} 

