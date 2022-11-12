use std::fs;
use std::env;
// use std::string;

fn main() {
    let args: Vec<String> = env::args().collect();

    let file_path = &args[1];

    println!("{:?}", args);

    let contents = fs::read_to_string(file_path)
        .expect("failed to read file");

    let users = String::from(contents);

    // println!("{}", users.len());

    for user in users.lines().enumerate() {
        let index = user.0;
        let content = user.1;
        if content.contains("s") {
            println!("{:?} - {:?}", index, content);
        }
    }
}


