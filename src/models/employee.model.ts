export interface Department {
  id: number;
  name: string;
}

export interface Role {
  id: number;
  name: string;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  salary: number;
  position: string;
  department: Department;
  role: Role;
}

export interface EmployeePostRequest {
  name: string;
  email: string;
  position: string;
  departmentId: number;
  roleId: number;
  salary: number;
}
