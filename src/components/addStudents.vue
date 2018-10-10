<template>
    <div>


 <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Students</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name (or) Add Students..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised"  :md-active.sync="first" @click="newUser;first=true">Create New User</md-button>
      </md-table-empty-state>


      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="studentName">{{ item.studentName }}</md-table-cell>
        <md-table-cell md-label="Class" md-sort-by="class">{{ item.class }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Delete"><md-button @click=" delete_student(item)"><md-icon style="cursor:pointer">delete</md-icon></md-button></md-table-cell>
      </md-table-row>
    </md-table>

<br>

 <md-dialog :md-active.sync="first">
      <md-dialog-title>Enter student details here</md-dialog-title>

 <md-field class="m-1">
      <label>Student's ID</label>
      <md-input v-model="studentId" placeholder="Enter Student's ID"></md-input>
    </md-field>
   <md-field class="m-1">
      <label>Student's Name</label>
      <md-input v-model="student_name" placeholder="Enter Student's name"></md-input>
    </md-field>
       <md-field class="m-1">
      <label>Student's Class</label>
      <md-input v-model="student_class" placeholder="Enter Student's class"></md-input>
    </md-field>
       <md-field class="m-1">
      <label>Student's Gender</label>
      <md-input v-model="student_gender" placeholder="Enter Student's Gender"></md-input>
    </md-field>
    

      <md-dialog-actions>
        <md-button class="md-primary" @click="first = false">Close</md-button>
        <md-button class="md-primary" @click="newUser();first=false">Submit</md-button>
      </md-dialog-actions>
      
    </md-dialog>


    </div>
</template>

<script>

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.studentName).includes(toLower(term)))
    }

    return items
  }
export default {
    name:'addStudents',
    data(){
        return{
      // filter_studentName:'',
      first: false,
      showDialog:false,
      search: null,
      searched: [],
      Students: [
                { id:1, studentName:'Dileep', class:'X', gender:'Male' },
                { id:2, studentName:'Havinash', class:'X', gender:'Male' },
                { id:3, studentName:'Prazwal', class:'X', gender:'Male' }
      ],
      studentId:'',
      student_name:'',
      student_class:'',
      student_gender:''
        }
    },
     methods: {
      newUser () {
        // window.alert('Noop')
        let new_student={
            id:this.studentId,
            studentName:this.student_name,
            class:this.student_class,
            gender:this.student_gender
        }
        this.Students.push(new_student)
        this.studentId='',
        this.student_name='',
        this.student_class='',
        this.student_gender=''
      },

      delete_student(item){
        var index = this.Students.indexOf(item)
        this.Students.splice(index, 1)
      },

      searchOnTable () {
        this.searched = searchByName(this.Students, this.search)
      }
    },
    created () {
      this.searched = this.Students
    }
}
</script>

<style scoped>

</style>