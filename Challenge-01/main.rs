use std::fs;
use std::env;
use std::vec;
// use std::string;
const REQUIRED_FIELDS: [&str; 6] = ["usr", "age", "eme", "psw", "loc", "fll"];

fn main() {
    let args: Vec<String> = env::args().collect();
    let file_path = &args[1];

    let contents = fs::read_to_string(file_path)
        .expect("failed to read file");

    let users = String::from(contents);
    let mut user_vec: Vec<&str> = vec![];

    let mut users_data: Vec<Vec<&str>> = vec![];

    for user in users.lines().enumerate() {
        // let index = user.0;
        let content = user.1;
        if content != "" {
            user_vec.push(content);
        } else {
            users_data.push(user_vec);
            user_vec = vec![];
        }
    }

    let data: Vec<Vec<&str>> = users_data.into_iter()
                                .map(|user| user.into_iter()
                                .filter(|d| have_fields(d)).collect()).collect();

    println!("{:?}", data );
}


fn have_fields(data: &str) -> bool {
    data.contains(REQUIRED_FIELDS[0]) &&  data.contains(REQUIRED_FIELDS[1]) &&  data.contains(REQUIRED_FIELDS[2]) &&  data.contains(REQUIRED_FIELDS[3]) &&  data.contains(REQUIRED_FIELDS[4]) &&  data.contains(REQUIRED_FIELDS[5])
}