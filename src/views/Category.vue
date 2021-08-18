<template>
  <el-card class="category-container" @click="loadData">
    <el-table
      v-loading="loading"
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="categoryName" label="分类名称"></el-table-column>
      <el-table-column prop="categoryRank" label="排序值" width="120"></el-table-column>
      <el-table-column prop="createTime" label="添加时间" width="200"></el-table-column>
      <el-table-column label="操作" width="220">
        <span>
          <a style="cursor: pointer; margin-right: 10px">修改</a>
          <a style="cursor: pointer; margin-right: 10px">下级分类</a>
          <!-- <el-popconfirm title="确定删除吗？">
            <template #reference>
              <a style="cursor: pointer">删除</a>
            </template>
          </el-popconfirm> -->
        </span>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="changePage"
    />
  </el-card>
</template>

<script>
import axios from '@/api/index'

export default {
  name: 'Category',
  components: {

  },
  data() {
    return{
      loading: false,
      tableData: [],
      multipleSelection: [], 
      total: 0, 
      currentPage: 1, 
      pageSize: 10, 
      type: 'add', 
      level: 1,
      parent_id: 0
    }
    },
  methods: {
    async loadData(){
      await axios.get('/api/categories',{
      params: {
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
          categoryLevel: this.level,
          parentId: this.parent_id
        }
      }).then(res=>{
        this.tableData=res.list;
        this.total = res.totalCount
        this.currentPage = res.currPage
      });
     }
  }
  }
</script>

<style scoped>
  .category-container {
    min-height: 100%;
  }
</style>
