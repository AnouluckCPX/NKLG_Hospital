export interface Employee {
     emp_id:      string;
     emp_name:    string;
     emp_surname: string;
     gender:      string;
     dob:         Date | null;
     address:     string;
     phone:       string;
     dep_ip:      string;
     dep_name:    string | null;
     craete_date: Date | null;
     edit_date: Date | null;
 }