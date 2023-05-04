<template>
  <!-- <MDBContainer>
  <Navbar />
  <MDBBtn>Primary</MDBBtn>
  <MDBBtn color="primary">Primary</MDBBtn>
  <MDBBtn color="secondary">Primary</MDBBtn>
  <MDBBtn color="light">Primary</MDBBtn>
  <MDBBtn color="dark">Primary</MDBBtn>
  <MDBBtn color="success">Primary</MDBBtn>
  <MDBBtn color="danger">Primary</MDBBtn>
  <MDBBtn color="info">Primary</MDBBtn>
  <MDBBtn color="warning">Primary</MDBBtn>
  </MDBContainer> -->
  <MDBNavbar
    container
    expand="md"
    bg="light"
    class="d-flex justify-content-between mb-3"
  >
    <MDBNavbarBrand>
      <MDBIcon icon="mdb" iconStyle="fab" size="2x" class="mr-w" />
      TPA-Bill
    </MDBNavbarBrand>

    <MDBNavbarToggler
      target="#navbarColor01"
      @click="collapse7 = !collapse7"
    ></MDBNavbarToggler>

    <MDBCollapse id="navbarColor01" v-model="collapse7" horizontal >
      <MDBNavbarNav class="mb-2 mb-lg-0">
        
        <MDBNavbarItem to="/bill/dashboard" linkClass="link-secondary"
          >Dashboard</MDBNavbarItem
        >
        <MDBNavbarItem to="/bill/quotations" linkClass="link-secondary"
          >ใบเสนอราคา</MDBNavbarItem
        >
        <MDBNavbarItem to="/bill/bills" linkClass="link-secondary"
          >ใบขอรับบริการ</MDBNavbarItem
        >
      </MDBNavbarNav>
    </MDBCollapse>

    <MDBNavbarNav class="mb-2 mb-lg-0 d-flex flex-row">
      <MDBNavbarItem to="#" class="me-3 me-lg-0" linkClass="link-secondary"
        ><MDBIcon icon="shopping-cart"></MDBIcon
      ></MDBNavbarItem>
      <MDBNavbarItem to="#" class="me-3 me-lg-0" linkClass="link-secondary">
        <MDBIcon icon="bell" />
        <MDBBadge notification color="danger" pill>1</MDBBadge>
      </MDBNavbarItem>
      <MDBNavbarItem href="#" class="me-3 me-lg-0">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
          class="rounded-circle"
          height="22"
          alt=""
          loading="lazy"
        />
      </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBNavbar>

 collapse7 : {{collapse7}}
  <MDBBtn
    tag="a"
    color="primary"
    @click="collapse1 = !collapse1"
    aria-controls="collapsibleContent1"
    :aria-expanded="collapse1"
    >Link</MDBBtn
  >
  <MDBBtn
    color="primary"
    @click="collapse1 = !collapse1"
    aria-controls="collapsibleContent1"
    :aria-expanded="collapse1"
    >Button</MDBBtn
  >

   collapse1 : {{collapse1}}
  <MDBCollapse id="collapsibleContent1" v-if="collapse1">
    <div class="mt-3">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
      anderson cred nesciunt sapiente ea proident.
    </div>
  </MDBCollapse>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBBadge,
  MDBIcon,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBIcon,
    MDBBtn,
  },
  setup() {
    const collapse7 = ref(false);
    const collapse1 = ref(false);
    return {
      collapse7,
      collapse1,
    };
  },
};
</script>
<style scoped>
  .collapseClass {
   display: none;
  }
</style>